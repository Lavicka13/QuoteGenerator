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
  
  

  React.useEffect(() => {
    document.body.style.backgroundImage = 'url(/bg.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.margin = 0; // Entfernt jeglichen Standard-Margin vom body
  }, []);

  return (
    <Container
    style={{
      display: 'flex',              // Aktiviert Flexbox
      flexDirection: 'column',      // Inhalte vertikal anordnen
      justifyContent: 'center',     // Zentriert Inhalte vertikal
      alignItems: 'center',         // Zentriert Inhalte horizontal
      minHeight: '100vh',           // Container nimmt die volle Fensterhöhe ein
      position: 'relative',
      /* backgroundImage: 'url(/bg.jpg)', // Hintergrundbild
      backgroundSize: 'cover',        // Skaliert das Bild, um den Container auszufüllen
      backgroundPosition: 'center',   // Zentriert das Bild
      //backgroundRepeat: 'repeat',  // Verhindert Bildwiederholung */
    }}
  >
    <Title
      align="center"
      style={{
        marginTop:"-250px",
        marginBottom:"150px",
        fontFamily: 'Inter, sans-serif',
        fontSize:"40px",
        color: 'transparent', // Text durchsichtig
        backgroundImage: 'linear-gradient(2deg, rgba(0,0,0.6, rgba(0, 0, 0, 0.3))',
        backgroundClip: 'text', // Hintergrund nur auf Text anwenden
        textFillColor: 'transparent', // Textfarbe transparent machen
        textShadow: '1px 1px 10px rgba(0, 0, 0, 0.6)', // Schlagschatten für Lesbarkeit
        backdropFilter: 'blur(10px)', // Hintergrund unscharf machen (frosted glass Effekt)
        
      }}
    >
      Random quote generator
    </Title>
    <Paper
      shadow="xl"
      radius="md"
      p="md"
      withBorder
      style={{
        position: "relative",
        height: "250px",
        width: "50vw",
        display: "flex",             // Flexbox aktivieren
        flexDirection: "column",     // Inhalte vertikal ausrichten
        justifyContent: "center",    // Zentriert Inhalte vertikal
        alignItems: "center",        // Zentriert Inhalte horizontal
        backdropFilter: 'blur(5px)', // Frosted Glass Effekt
        background: 'rgba(255, 255, 255, 0.3)', // Transparenter Hintergrund
        borderRadius: '15px',        // Abgerundete Ecken
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', marginTop:"-30px" }}>
        <Text mb="20px" size="20px">{content}</Text>
        <Text c ="grey" size ="lg" mt="40px" >{author}</Text>
        <Button
          variant="gradient"
          gradient={{ from: 'cyan', to: 'grape', deg: 90 }}
          onClick={getNewQuote}
          
          style={{
            position: 'absolute', // Button unten fixieren
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50%',
          }}
        >
          Get another Quote
        </Button>
      </div>
    </Paper>
  </Container>
  
  
  );
}

export default Quotegenerator;
