// app/projects.tsx
const Projects = () => {
  return (
    <div className="container">
      <h1>My Projects</h1>
      <ul>
        <li>
          <a href="https://github.com/your-repo/algorithm-visualizer" target="_blank" rel="noopener noreferrer">
            Algorithm Visualizer using p5.js
          </a>
          <p>
            A project where I created an interactive visualizer for algorithms like K-NN, PCA, and more, using p5.js to help users better understand complex algorithms.
          </p>
        </li>
        <li>
          <a href="https://github.com/your-repo/blockchain-research" target="_blank" rel="noopener noreferrer">
            Blockchain Research Paper
          </a>
          <p>
            A research paper that explores blockchain technologies, with an emphasis on its applications and potential in IT domains. The paper was prepared as part of my MSc IT coursework.
          </p>
        </li>
        <li>
          <a href="https://github.com/your-repo/deribit-order-system" target="_blank" rel="noopener noreferrer">
            High-Performance Order Execution and Management System
          </a>
          <p>
            A C++ based project aimed at creating a high-performance system to manage and execute orders for Deribit Test. Focused on optimizing speed and reliability.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
