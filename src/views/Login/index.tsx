import { defineComponent } from "vue";
import BaseInput from "@/components/Input/BaseInput";
import logginBg from "@/assets/images/login-bg.png";

const Login = defineComponent({
  setup() {
    document.body.style.backgroundImage = `url(${logginBg})`;

    return () => (
      <>
        <div class="w-screen h-screen pt-48 xl:pt-36 flex justify-center">
          <div class="w-120 h-120 px-2 py-2">
            <div class="mb-8 font-bold text-4xl text-center text-white">
              LOOGO
            </div>

            <div class="w-full h-full text-sm rounded-xl shadow-md bg-white">
              <div
                class="w-56 mx-auto h-full flex flex-col justify-center items-center"
              >
                <BaseInput prefix="Account" />
                <BaseInput prefix="Password" type="password" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
});

export default Login;
