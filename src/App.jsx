import { useState } from 'react';
import './App.css'

function App() {
  const[randomQuote, setRandomQuote] = useState("")
const quotes = [
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "In three words I can sum up everything I’ve learned about life: it goes on.", author: "Robert Frost"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt"},
    {quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis"},
    {quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln"},
    {quote: "Dream big and dare to fail.", author: "Norman Vaughan"},
    {quote: "Life is what happens when you’re busy making other plans.", author: "Allen Saunders"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson"},
    {quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius"},
    {quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"},
    {quote: "The best revenge is massive success.", author: "Frank Sinatra"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {quote: "The secret of getting ahead is getting started.", author: "Mark Twain"},
    {quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
    {quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown"},
    {quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson"},
    {quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein"},
    {quote: "The greatest wealth is to live content with little.", author: "Plato"},
    {quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb"},
    {quote: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.", author: "Dr. Seuss"},
    {quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein"},
    {quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison"},
    {quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates"},
    {quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson"},
    {quote: "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart.", author: "Helen Keller"},
    {quote: "Life is short, and it’s up to you to make it sweet.", author: "Sarah Louise Delany"},
    {quote: "The purpose of our lives is to be happy.", author: "Dalai Lama"},
    {quote: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou"},
    {quote: "The greatest gift of life is friendship, and I have received it.", author: "Hubert H. Humphrey"},
    {quote: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke"},
    {quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.", author: "Sholom Aleichem"},
     {quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi"},
    {quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller"},
    {quote: "The purpose of art is washing the dust of daily life off our souls.", author: "Pablo Picasso"},
    {quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "It always seems impossible until it’s done.", author: "Nelson Mandela"},
    {quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson"},
    {quote: "If you can dream it, you can achieve it.", author: "Zig Ziglar"},
    {quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon"},
    {quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman"},
    {quote: "Act as if what you do makes a difference. It does.", author: "William James"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats"},
    {quote: "The mind is everything. What you think you become.", author: "Buddha"},
    {quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll"},
    {quote: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt"},
    {quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi"},
    {quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln"},
    {quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington"},
    {quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot"},
    {quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown, Jr."},
    {quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha"},
    {quote: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw"},
    {quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins"},
    {quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau"},
    {quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt"},
    {quote: "If you’re going through hell, keep going.", author: "Winston Churchill"},
    {quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama"},
    {quote: "Don’t judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson"},
    {quote: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus"},
    {quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair"},
    {quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer"},
    {quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar"},
    {quote: "You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot – it’s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.", author: "Maya Angelou"},
    {quote: "You can’t go back and change the beginning, but you can start where you are and change the ending.", author: "C.S. Lewis"},
    {quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou"},
    {quote: "I have not failed. I’ve just found 10,000 ways that won’t work.", author: "Thomas Edison"},
    {quote: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain"},
    {quote: "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.", author: "Anatole France"},
    {quote: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.", author: "James Cameron"},
    {quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill"},
    {quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson"},
    {quote: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.", author: "Mark Zuckerberg"},
    {quote: "Success is not the result of spontaneous combustion. You must set yourself on fire.", author: "Arnold H. Glasow"},
    {quote: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs"},
    {quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh, Alice in Wonderland"},
    {quote: "The greater the obstacle, the more glory in overcoming it.", author: "Molière"},
    {quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe"},
    {quote: "The harder the conflict, the greater the triumph.", author: "George Washington"},
    {quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link"},
    {quote: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford"}
];

function handleQuoteGenerator() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  setRandomQuote(quotes[quoteIndex]);
}
  return (
    <div className='container'>
      <h1>Quote Generator</h1>
        <div className='outputSection'>
            <h3>{randomQuote.quote}</h3>
            <p>- {randomQuote.author}</p>
        </div>
      <button onClick={handleQuoteGenerator}>Generate</button>
      <footer>Created by Haffi</footer>
    </div>
  )
}

export default App