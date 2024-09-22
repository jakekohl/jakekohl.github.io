<script setup>
import { ref, watchEffect } from 'vue'

const commits_api = `https://api.github.com/repos/jakekohl/jakekohl.github.io/commits?per_page=3&sha=`
const branches_api = `https://api.github.com/repos/jakekohl/jakekohl.github.io/branches?per_page=5`
const branches = getBranches()

const currentBranch = ref(branches[0])
const commits = ref([])

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  const url = `${commits_api}${currentBranch.value}`
  commits.value = await (await fetch(url)).json()
})

async function getBranches() {
  try {
    logMessage(`Pulling branches from jakekohl.github.io`)
    const url = `${branches_api}`
    const list = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
      }
    }).json()
    logMessage(`Branches found!`)
    logMessage(list)
    return list
  } catch (e) {
    logMessage(e)
  }
}

function logMessage(msg) {
  console.info(msg)
}

function truncate(v) {
  const newline = v.indexOf('\n')
  return newline > 0 ? v.slice(0, newline) : v
}

function formatDate(v) {
  return v.replace(/T|Z/g, ' ')
}
</script>

<template>
  <h1>Latest Commits to jakekohl.github.io</h1>
  <template v-for="branch in branches">
    <input type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="currentBranch">
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>jakekohl/jakekohl.github.io@{{ currentBranch }}</p>
  <ul v-if="commits.length > 0">
    <li v-for="{ html_url, sha, author, commit } in commits" :key="sha">
      <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span><br>
      by <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<style>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>