const projects = [
  {
    title: "Calculator App",
    description: "A simple calculator built with JavaScript.",
    link: "https://github.com/yourusername/calculator"
  },
  {
    title: "AI Chatbot",
    description: "A chatbot using Python + OpenAI API.",
    link: "https://github.com/yourusername/ai-chatbot"
  },
  {
    title: "Todo List",
    description: "A to-do app with local storage and clean UI.",
    link: "https://github.com/yourusername/todo-list"
  }
];

const container = document.getElementById("projectCards");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View on GitHub →</a>
  `;
  container.appendChild(card);
});
