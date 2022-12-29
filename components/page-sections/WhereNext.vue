<template>
    <section class="where-next">
        <div class="card-container" v-for="(items) in card.linked_cards">
            <Card v-if="items.title == 'worker-card'"
             text1="I am a" 
             text2="Skilled Worker"
             textType1="secondary"
             textType2="secondary"
             detail="Defence Industry needs you. Find out more about in-demand jobs and training opportunities."
             link="https://stateempire.com" 
             image="footer_home_imaskilledworker.jpg" 
             />

            <Card v-if="items.title == 'student-card'" 
            text1="I am a " 
            text2="Student"
            detail="What jobs can you do in Defence Industry? Discover career opportunities and study pathways."
            link="https://stateempire.com" 
            image="footer_home_imastudent.jpg" 
            textType1="secondary"
            textType2="secondary"
            />

            <Card v-if="items.title == 'business-card'" 
            text1="I am a " 
            text2="Business"
            textType1="secondary"
            textType2="secondary"
            detail="Want to learn more about how to work with Defence? Learn about the growing opportunities and what your business needs to be Defence-ready."
            link="https://stateempire.com" 
            image="footer_home_imabusiness.jpg" />
        </div>
    </section>
</template>

<script>
import Card from '../global/Card.vue';

export default {
    props: {
        card: Object
    },
    components: { Card }
}

</script>