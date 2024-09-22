<script setup>
import { ref, onMounted, watch } from 'vue'

const branches = ref([])
const currentBranch = ref(null)
const commits = ref([])

onMounted(async () => {
  try {
    // Fetch branches once the component mounts
    branches.value = await getBranches()
    
    // Set the current branch to the first one, and load commits
    if (branches.value.length > 0) {
      currentBranch.value = branches.value[0]
      commits.value = await getCommits(currentBranch.value)
    }
  } catch (error) {
    console.error("Error loading branches or commits:", error)
  }
})

// Watch for changes to the current branch and load commits accordingly
watch(currentBranch, async (newBranch) => {
  if (newBranch) {
    commits.value = await getCommits(newBranch)
  }
})

async function getCommits(branch) {
  try {
    const branchName = branch.name || 'main' // Fallback to 'main' if branch has no name
    const url = `https://api.github.com/repos/jakekohl/jakekohl.github.io/commits?per_page=5&sha=${branchName}`
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_GH}`,
        'Accept': 'application/vnd.github+json',
      }
    })
    return await resp.json()
  } catch (e) {
    console.error("Error fetching commits:", e)
    return []
  }
}

async function getBranches() {
  try {
    const url = `https://api.github.com/repos/jakekohl/jakekohl.github.io/branches?per_page=5`
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_GH}`,
        'Accept': 'application/vnd.github+json',
      }
    })
    return await resp.json()
  } catch (e) {
    console.error("Error fetching branches:", e)
    return []
  }
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
  <h1>Latest Commits</h1>
  
  <template v-if="branches.length > 0">
    <template v-for="branch in branches" :key="branch.name">
      <input type="radio" :id="branch.name" :value="branch" name="branch" v-model="currentBranch">
      <label :for="branch.name">{{ branch.name }}</label>
    </template>
    <p v-if="currentBranch">{{ currentBranch.name }} branch</p>

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
  
  <div v-else>
    <p>Loading branches and commits...</p>
  </div>
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
