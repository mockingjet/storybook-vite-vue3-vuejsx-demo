import { defineComponent } from "vue";

const App = defineComponent({
  setup() {
    return () => (
      <>
        <div class="text-sm">
          <router-view />
        </div>
      </>
    );
  },
});

export default App;
