/** uncomment one of these **/
// import OpenAI from "openai";
import { HfInference } from "@huggingface/inference";

const { T5ForConditionalGeneration, T5Tokenizer } = require("@transformers");

async function generateText(inputText) {
  // Load pre-trained T5 model and tokenizer
  const modelName = "t5-small";
  const model = await T5ForConditionalGeneration.fromPretrained(modelName);
  const tokenizer = await T5Tokenizer.fromPretrained(modelName);

  // Tokenize the input text
  const input = tokenizer.encode(inputText, { return_tensors: "pt" });

  // Generate text using the model
  const output = await model.generate(input, {
    max_length: 50,
    num_beams: 5,
    no_repeat_ngram_size: 2,
  });

  // Decode the generated tokens to get the text
  const generatedText = tokenizer.decode(output[0], {
    skipSpecialTokens: true,
  });

  console.log("Generated Text:", generatedText);
}

// Example input text
const inputText = "Once upon a time";

// Call the function to generate text from input
generateText(inputText);

document
  .getElementById("window-container")
  .addEventListener("click", function () {
    /**
     * 🎄 Challenge:
     * 1. When clicked, the doors should open
     *    to reveal a festive joke.
     *
     * 🎁 hint.md for help!
     **/
    document.querySelector(".left-door").style =
      "animation: left-open 0.3s forwards";
    document.querySelector(".right-door").style =
      "animation: right-open 0.3s forwards";
    document.querySelector(".joke-display").style =
      "animation: display-joke 0.3s forwards";
  });
