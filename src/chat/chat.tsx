import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import {
  ActionRequest,
  AudioActionResponse,
  ChatController,
  FileActionResponse,
  MuiChat,
} from 'chat-ui-react';
import React from 'react';

import './index.css';

import { Configuration, OpenAIApi } from 'openai';
import { shallow } from 'zustand/shallow';
import { useStore } from '../store/store';
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
    },
  },
});

const configuration = new Configuration({
  //read for environment variable called API_Key
  apiKey: process.env.REACT_APP_KEY,
});
const openai = new OpenAIApi(configuration);

export async function fetchOpenAIDavinci(text: string) : Promise<string> {
  console.log('tryna fetch', process.env.REACT_APP_KEY);
  const prompt = `The following is a conversation with an AI assistant called "Bot" that can have meaningful conversations with users. The assistant is helpful, empathic, and friendly. Its objective is to make the user feel better by feeling heard. With each response, the AI assisstant prompts the user to continue the conversation in a natural way. The assistant advices instead of asking too many question and makes the user feel better
Bot: Hello, I am your personal mental health AI assistant`;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt + '\n' + text,
    max_tokens: 100,
    temperature: 0.6,
  });
  console.log(completion.data);
  if (typeof completion.data.choices[0].text == 'string') {
    return completion.data.choices[0].text.replace('Bot: ', '').replace('/n','');}
  else {
  return '';
  }
}
const selector = (state: { setCurrentPage: any; userName: any }) => ({
  setCurrentPage: state.setCurrentPage,
  userName: state.userName,
});

export function ChatUI(): React.ReactElement {
  const { setCurrentPage, userName } = useStore(selector, shallow);
  const [chatCtl] = React.useState(
    new ChatController({
      showDateTime: true,
    })
  );

  React.useEffect(() => {
    
  }, [chatCtl]);
    

  React.useMemo(async () => {
    await chatCtl.addMessage({
      type: 'text',
      content: `Hello ${userName.split(" ")[0]}, How are you feeling today?`,
      self: false,
      avatar: '-',
    });
    echo(chatCtl);
  }, [chatCtl]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ height: '100%', backgroundColor: 'gray' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
            bgcolor: 'background.default',
          }}
        >
          <Divider />
          <Box sx={{ flex: '1 1 0%', minHeight: 0 }}>
            <MuiChat chatController={chatCtl} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

async function getMessages(chatCtl: ChatController): Promise<string> {
  let request = '';
  chatCtl.getMessages().forEach((msg) => {
    
    if (msg.self) {
      request += 'You: ' + msg.content + '\n';
    } else {
      request += 'Bot: ' + msg.content + '\n';
    }
  });
  return await fetchOpenAIDavinci(request);
}


async function echo(chatCtl: ChatController): Promise<void> {
  
  
  const text = await chatCtl.setActionRequest({
    type: 'text',
  });
  await chatCtl.addMessage({
      type: 'text',
      content: `${await getMessages(chatCtl)}`,
      self: false,
      avatar: '-',
  });
 
  echo(chatCtl);
}
