import { Button, Paper, Title, Text, Container, BackgroundImage
 } from '@mantine/core';
import React, { useState, useEffect } from "react";

function Quotegenerator() {
  const url = "https://api.quotable.io/random";
  const [quotes, setQuotes] = useState({});

  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error fetching quote:", error));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const { content, author } = quotes;

  return (
    <Container size={420} my={40} style={{ position: 'relative' }}>
    <BackgroundImage src="/quotegenerator/src/bg.jpg">
    <Title align="center">Welcome to the random quote generator</Title>
    <Paper 
        shadow="xl" 
        radius="md" 
        p="md" 
        withBorder 
        mt="xl" 
        style={{
          width: '500px',   // Fixed width
          height: '300px',  // Fixed height
          backdropFilter: 'blur(10px)',  // Frosted glass effect
          background: 'rgba(255, 255, 255, 0.3)',  // Semi-transparent white background
          borderRadius: '15px',  // Rounded corners
          padding: '20px',  // Padding inside Paper
        }}
      >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Text>{content}</Text>
        <Text> {author}</Text>
        <Button
          variant="gradient"
          gradient={{ from: 'cyan', to: 'grape', deg: 90 }}
          onClick={getNewQuote}
          
        >
          Get another Quote
        </Button>
        </div>
      </Paper>
      </BackgroundImage>
     </Container>
  );
}

export default Quotegenerator;
