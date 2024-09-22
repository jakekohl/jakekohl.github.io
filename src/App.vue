<script setup>
import { ref, watchEffect } from 'vue'

const branches = await getBranches()
const defaultBranch = branches[0]
console.log(defaultBranch)


const commits = ref([])
console.log(commits)

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  commits.value = await getCommits(defaultBranch)
})

async function getCommits(branch) {
  try {
    console.log(`Finding commits for ${branch.name}`)
    const url = `https://api.github.com/repos/jakekohl/jakekohl.github.io/commits?per_page=3&sha=${branch.commit.sha}`
    const resp = await fetch(url, {
      method: 'GET',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github+json',
        }
    })
    const data = await resp.json()
    return data
  } catch (e) {
    console.log(e)
  }
  
}

async function getBranches() {
  try {
    logMessage(`Pulling branches from jakekohl.github.io`)
    const url = `https://api.github.com/repos/jakekohl/jakekohl.github.io/branches?per_page=3`
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
      }
    })
    const data = await resp.json()
    logMessage(`Branches found!`)
    return data
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
      :data-entity="commit-radio-list"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="defaultBranch">
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>jakekohl/jakekohl.github.io@{{ defaultBranch.name }}</p>
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