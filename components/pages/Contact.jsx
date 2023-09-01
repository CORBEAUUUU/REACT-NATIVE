import React, { useState } from "react";
import { View } from "react-native";

const Contact = () => {

//Crée les variables d'états pour stocker les entrées de l'utilisateur
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

//Les fonctions qui s'éxecutent quand l'utilisateur tape dans les champs 
const handleAuthor = (e) =>{
    setAuthor(e.target.value);
}
const handleContent = (e) =>{
    setAuthor(e.target.value);
}

const submit = async() => {
    const reponse = await fetch("/api/message", {
        method:"¨POST",
        body: JSON.stringify({author: author, content:content}),
    });
};

    return (
       <div>
        <input placeholder="Auteur" onChange={handleAuthor} />
        <input placeholder="Auteur" onChange={handleContent} />
        <button onClick={submit}>Envoyer</button>
       </div>
    );
};

export default Contact;
