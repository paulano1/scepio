import {
  Box,
  CssBaseline,
  Divider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import {
  ChatController,
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

async function OpenaiFetchAPI(Prompt : string) {

  console.log('Calling GPT3');
  console.log('prompt', prompt);
  var url = 'https://api.openai.com/v1/engines/davinci/completions';
  var bearer =
    'Bearer ' + process.env.REACT_APP_KEY;
  const data = await fetch(
        `https://api.openai.com/v1/completions`,
        {
            body: JSON.stringify({"model": "text-davinci-003", "prompt": Prompt, "temperature": 0, "max_tokens": 100}),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: bearer,
            },
                }
    )
  return data.json(); 
}

export async function fetchOpenAIDavinci(text: string) : Promise<string> {
  console.log('tryna fetch', process.env.REACT_APP_KEY);
  const prompt = `The following is a conversation with an AI assistant that can have meaningful conversations with users. The assistant is helpful, empathic, and friendly. Its objective is to make the user feel better by feeling heard. With each response, the AI assisstant prompts the user to continue the conversation in a natural way.
Therapist: Hello, I am your personal mental health AI assistant`;

  const data  = await OpenaiFetchAPI(prompt + '\n' + text + '\nTherapist: ');
  if (typeof data.choices[0].text == 'string') {
    return data.choices[0].text.replace('Therapist: ', '').replace('/n','');}
  else {

return '';
}
}
const selector = (state: { userName: any }) => ({
  userName: state.userName,
});

export function ChatUI(): React.ReactElement {
  const { userName } = useStore(selector, shallow);
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
  }, [chatCtl, userName]);

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
      request += 'Therapist: ' + msg.content + '\n';
    }
  });
  return await fetchOpenAIDavinci(request);
}


async function echo(chatCtl: ChatController): Promise<void> {
  
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
