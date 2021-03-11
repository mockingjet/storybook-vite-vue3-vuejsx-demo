import { defineComponent } from "vue";

const BaseInput = defineComponent({
  props: {
    prefix: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    inputClass: {
      type: String,
      default: 'w-32 bg-transparent',
    }
  },
  setup(props) {
    return () => (
      <div class="py-2 px-4 inline-flex border focus-within:border-blue-500">
        {
          props.prefix
            ? (<div class="mr-4 text-gray-500">{props.prefix}</div>)
            : ("")
        }

        <input class="w-32 bg-transparent" type={props.type} />
      </div>
    );
  },
});

export default BaseInput;
