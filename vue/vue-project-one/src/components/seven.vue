<script>
export default {
    render(){
        return (
            <div>
                {this.$slots.header}
                {this.$slots.default}
            </div>
        )
    }
}
</script>