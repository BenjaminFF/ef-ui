<script>
    export default {
      name: 'EfRow',

      componentName: 'EfRow',

      props: {
        tag: {
          type: String,
          default: 'div'
        },
        gutter: Number,
        type: String,
        justify: {
          type: String,
          default: 'start'
        },
        align: {
          type: String,
          default: 'top'
        }
      },

      computed: {
        style() {
          const ret = {};

          return ret;
        }
      },

      render(h) {
        return h(this.tag, {
          class: [
            'el-row',
            this.justify !== 'start' ? `is-justify-${this.justify}` : '',
            this.align !== 'top' ? `is-align-${this.align}` : '',
            { 'el-row--flex': this.type === 'flex' }
          ],
          style: this.style
        }, this.$slots.default);
      }
    }
</script>

<style scoped>

</style>
