<template>
    <div class="diagram-template">
        <svg class="circle-container" width="126" height="126" viewBox='0 0 42 42'>
            <circle v-bind="backgroundStyle" />
            <circle v-bind="diagramStyle" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Diagram',
    props: {
        percent: Number,
    },
    computed: {
        diagramStyle() {
            const percent = this.percent,
                  length = 100,
                  radius = length / (Math.PI * 2),
                  dash = percent,
                  space = length - dash;
            let stroke = '#FE4D4A';
            
            return {
                'cx': 21,
                'cy': 21,
                'r': radius,
                'fill': 'none',
                'stroke': stroke,
                'stroke-width': 7,
                'stroke-linecap': 'butt',
                'stroke-dasharray': `${dash} ${space}`,
                'stroke-dashoffset': 25,
            }
        },
        backgroundStyle() {
            return{
                ...this.diagramStyle,
                'stroke': '#FFF',
                'stroke-width': 3,
                'stroke-dasharray': '100 0',
            }
        }
    }
}
</script>

<style lang="stylus">

    .diagram-template
        position relative
        text-align center

</style>