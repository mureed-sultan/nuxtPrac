<template>
  <main>
    <PageSection v-for="(section, i) in sections" :section="section" :key="i" />
  </main>
</template>

<script src="~/scripts/page/page.js"></script>
