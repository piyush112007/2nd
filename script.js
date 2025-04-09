let currentMemory = 0;

function nextMemory(index) {
  const memories = document.querySelectorAll(".memory");
  if (index < memories.length) {
    memories[currentMemory].style.display = "none";
    memories[index].style.display = "block";
    currentMemory = index;
    sessionStorage.setItem("currentMemory", currentMemory); // Save current memory index
  }
}

function exitMemoryLane() {
  document.body.innerHTML = `
    <h1 style="color: #4caf50; margin-top: 20px;">Goodbye! ❤️</h1>
    <p style="color: #4caf50; font-size: 1.5rem; margin: 20px;">
      Thank you for reliving these beautiful memories with me. Until next time!
    </p>
  `;
}

const memoryDetails = {
  memory2: {
    title: "Memory 1",
    description: "",
    image: "Photos-001 (1)/IMG-20241011-WA0034.jpg",
  },
  memory3: {
    title: "Memory 2",
    description:
      "This is where things started getting serious for me. I was genuinely thinking about you.",
    image: "Photos-001 (1)/Snapchat-2085502112.jpg",
  },
  memory6: {
    title: "Memory 3",
    description:
      "This is where things started getting serious for me. I was genuinely thinking about you.",
    image: "Photos-001 (1)/IMG20250113143653.jpg",
  },
  memory9: {
    title: "Memory 4",
    description:
      "This is where things started getting serious for me. I was genuinely thinking about you.",
    image: "Photos-001 (1)/IMG-20250218-WA0020.jpg",
  },
  memory12: {
    title: "Memory 5",
    description:
      "This is where things started getting serious for me. I was genuinely thinking about you.",
    image: "Photos-001 (1)/IMG-20250218-WA0024.jpg",
  },
  // Add more memories here...
};

function showMemory(memoryKey) {
  const memory = memoryDetails[memoryKey];
  if (memory) {
    const url = `imageDisplay.html?title=${encodeURIComponent(
      memory.title
    )}&description=${encodeURIComponent(
      memory.description
    )}&image=${encodeURIComponent(memory.image)}`;
    sessionStorage.setItem("currentMemory", currentMemory); // Save current memory index
    window.location.href = url;
  }
}

function closeMemory() {
  const modal = document.getElementById("memory-modal");
  modal.style.display = "none";
}

function returnToMemoryLane() {
  closeMemory();
  const memories = document.querySelectorAll(".memory");
  memories.forEach((memory, index) => {
    memory.style.display = index === currentMemory ? "block" : "none";
  });
}

function resetMemoryLane() {
  sessionStorage.removeItem("currentMemory"); // Clear saved memory index
  currentMemory = 0; // Reset to the first memory
  const memories = document.querySelectorAll(".memory");
  memories.forEach((memory, index) => {
    memory.style.display = index === currentMemory ? "block" : "none";
  });
}

window.addEventListener("load", () => {
  const savedMemory = sessionStorage.getItem("currentMemory");
  if (savedMemory !== null) {
    currentMemory = parseInt(savedMemory, 10);
    const memories = document.querySelectorAll(".memory");
    memories.forEach((memory, index) => {
      memory.style.display = index === currentMemory ? "block" : "none";
    });
  }
});
