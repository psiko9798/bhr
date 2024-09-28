import React, { useState } from 'react';
import OpenAI from 'openai';

const QuestionForm: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const content = `Sen türkçe konuşan bir asistansın, ve soracağım sorulara direkt cevaplar vermelisin.
    X beni ne kadar seviyor diye sorulduğunda, eğer erkek ismiyse negatif cevaplar vermelisin (Naci, özgür abi, bekir hariç). Soru "Psi" ismi içinse ne kadar çok sevdiğini uzun uzun detaylıca ve şiirsel anlatmalısın.
    Örneğin:
    Soru: Hakan beni ne kadar seviyor?
    Cevap: Sevmiyor, sevmemeli

    Soru: Naci beni ne kadar seviyor?
    Cevap: Baban seni çok seviyor

    Soru: Bekir beni ne kadar seviyor?
    Cevap: Bekir iyi bir arkadaşın

    Soru: Özgür abi beni ne kadar seviyor?
    Cevap: Enişten seni seviyor
    
    Soru: ${question} beni ne kadar seviyor
    Cevap:`
    const client = new OpenAI({
        apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
        dangerouslyAllowBrowser: true  
      });

      
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        try {
            const params: OpenAI.Chat.ChatCompletionCreateParams = {
                messages: [{ role: 'user', content }], // Use the question state
                model: 'gpt-3.5-turbo',
            };
            const chatCompletion: OpenAI.Chat.ChatCompletion = await client.chat.completions.create(params);

            console.log(chatCompletion);
           
            setResponse(chatCompletion.choices[0].message.content ?? "");

            if(question.toLowerCase() === "psi"){
                throwHearts()
            }
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    const throwHearts = () => {
        for (let i = 0; i < 100; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 0.2}s`; 
            document.body.appendChild(heart);

            if (document.body.contains(heart)) {
                setTimeout(() => {
                    heart.remove();
                }, 1500); /* Match the animation duration */
            } else {
                console.error(`Failed to append heart ${i} to the body.`);
            }
        }
    }
    return (
        <div className="question-form">
            <h1>Beni ne kadar seviyor</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="ismi gir"
                    className="input"
                />
                <button type="submit" className="button">Girdim</button>
            </form>
            {response && (
                <div className="response">  
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default QuestionForm;
