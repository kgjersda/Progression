<template>
    <div>
        <h1>I am showing!</h1>
        <ul>
            <li v-for="item in list">
                {{ item.title }}
            </li>
        </ul>
            </div>
</template>
<script src="./exercises.js"></script>
<style src="./exercises.scss" lang="scss"></style>