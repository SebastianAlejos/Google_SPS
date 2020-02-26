// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random facts to the page.
 */
function addRandomFacts() {
  const facts =
      ['My dogs name is Kyra', 'I study Computer Science', 'I love playing soccer', 'Im from México', 'This is my first website ever!', 'I started coding two years ago!'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}
function getData() {
  console.log('Fetching Data URL');
  const responsePromise = fetch('/data');
  responsePromise.then(handleResponse);
}

function handleResponse(response) {
  console.log('Handling the response.');
  const textPromise = response.text();
  textPromise.then(addTextToDom);
}

/** Adds a random quote to the DOM. */
function addTextToDom(text) {
  console.log('Adding text to dom: ');
  const quoteContainer = document.getElementById('text-container');
  quoteContainer.innerText = text;
}