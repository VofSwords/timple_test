<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import SWenLogo from "./components/SWenLogo.vue";
import SwenBg from "./components/SwenBg.vue";
import RateSmth from "./components/RateSmth.vue";
import { computed, ref } from "vue";
import GavnoEbanoe from "./components/GavnoEbanoe.vue";

const isDescribing = ref(false);
const description = ref("");
const handleDescribe = (e: any) => {
  const target = e.target;
  const value = target.innerText;
  description.value = value;
  isDescribing.value = false;
};

const amountEur = ref(0);
const asdd = computed(() => amountEur.value + "€");
const onAmountChange = (e: any) => {
  let sspf = e.target.value;
  const asd = sspf.replace("€", "");
  amountEur.value = +asd;
};

const isDialogShown = ref(false);
</script>

<template>
  <header>
    <div class="h-12 relative flex items-center justify-center bg-white">
      <div class="p-2">
        <svg
          class="h-6"
          viewBox="0 0 69 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8261 10.4633C9.45139 10.3729 8.19619 10.3051 7.06052 10.2599L7.03811 12.6554C7.03811 13.4689 7.20995 14.1092 7.55364 14.5763C7.91227 15.0283 8.53987 15.2542 9.43645 15.2542C9.78013 15.2542 10.1089 15.2241 10.4227 15.1638C10.3629 15.7213 10.333 16.2863 10.333 16.8588C10.333 17.1299 10.348 17.7476 10.3779 18.7119C9.72036 18.8324 9.16748 18.9077 8.71919 18.9379C8.2709 18.968 7.68813 18.9831 6.97087 18.9831C5.22255 18.9831 3.98229 18.5612 3.25008 17.7175C2.53282 16.8588 2.17419 15.6686 2.17419 14.1469L2.19661 10.3277C1.49429 10.3578 0.762088 10.403 0 10.4633V6.46328C0.777031 6.46328 1.43452 6.21469 1.97246 5.71751C2.51041 5.22034 2.83168 4.62524 2.93628 3.9322H9.03299C8.2709 4.98682 7.42663 5.83051 6.50017 6.46328H10.8261V10.4633Z"
            fill="#0F0A2F"
          />
          <path
            d="M15.8401 5.08475C14.8987 5.08475 14.1964 4.85122 13.7332 4.38418C13.2849 3.91714 13.0607 3.30697 13.0607 2.55367C13.0607 1.81544 13.2849 1.20527 13.7332 0.723164C14.1964 0.241054 14.8987 0 15.8401 0C16.7367 0 17.4241 0.248587 17.9022 0.745762C18.3804 1.22787 18.6195 1.83051 18.6195 2.55367C18.6195 3.30697 18.3879 3.91714 17.9247 4.38418C17.4614 4.85122 16.7666 5.08475 15.8401 5.08475ZM13.2401 18.7571C13.3447 16.3315 13.397 14.3277 13.397 12.7458C13.397 10.8625 13.3372 8.7533 13.2176 6.41808H18.5971C18.4776 8.6629 18.4178 10.7721 18.4178 12.7458C18.4178 14.403 18.4701 16.4068 18.5747 18.7571H13.2401Z"
            fill="#0F0A2F"
          />
          <path
            d="M38.6727 18.7571C38.7922 16.7834 38.852 14.742 38.852 12.6328C38.852 11.9548 38.6801 11.4275 38.3364 11.0508C38.0077 10.6591 37.5669 10.4633 37.014 10.4633C36.5059 10.4633 36.0651 10.6893 35.6916 11.1412C35.3329 11.5932 35.1536 12.2486 35.1536 13.1073V13.0847C35.1536 15.7514 35.191 17.6422 35.2657 18.7571H30.2224C30.3121 16.5424 30.3569 14.5009 30.3569 12.6328C30.3569 11.9699 30.1926 11.4426 29.8638 11.0508C29.55 10.6591 29.1466 10.4633 28.6534 10.4633C28.1304 10.4633 27.6896 10.6893 27.331 11.1412C26.9873 11.5782 26.7856 12.1808 26.7258 12.9492C26.6959 14.0942 26.681 14.9077 26.681 15.3898C26.681 16.4143 26.7109 17.5367 26.7706 18.7571H21.4136C21.5331 16.5876 21.5929 14.5386 21.5929 12.6102C21.5929 10.6817 21.5331 8.6177 21.4136 6.41808C22.3998 6.46328 23.1544 6.48588 23.6774 6.48588C24.2303 6.48588 24.985 6.46328 25.9413 6.41808L26.6137 9.76271C26.9574 8.54237 27.5028 7.64595 28.25 7.07345C28.9971 6.48588 29.8563 6.19209 30.8276 6.19209C31.9932 6.19209 32.9421 6.51601 33.6743 7.16384C34.4214 7.81168 34.8846 8.65537 35.0639 9.69492C35.4076 8.62524 35.9829 7.77401 36.7899 7.14124C37.5968 6.50848 38.5158 6.19209 39.5468 6.19209C40.8917 6.19209 41.9452 6.6516 42.7072 7.57062C43.4693 8.47458 43.8504 9.71751 43.8504 11.2994V15.0508C43.8504 16.7533 43.8653 17.9887 43.8952 18.7571H38.6727Z"
            fill="#0F0A2F"
          />
          <path
            d="M56.3723 6.19209C57.3436 6.19209 58.2178 6.47081 58.9948 7.02825C59.7718 7.58569 60.377 8.34652 60.8104 9.31073C61.2437 10.2599 61.4604 11.307 61.4604 12.452C61.4604 13.5819 61.2437 14.6516 60.8104 15.661C60.377 16.6554 59.7643 17.4614 58.9724 18.0791C58.1953 18.6817 57.3062 18.9831 56.3051 18.9831C55.1395 18.9831 54.1383 18.742 53.3015 18.2599C52.4797 17.7627 51.867 17.0019 51.4636 15.9774C51.4636 16.8362 51.4934 18.2147 51.5532 20.113C51.613 21.951 51.6429 23.2467 51.6429 24L49.0798 22.653L46.5772 24C46.6669 21.1977 46.7117 18.2674 46.7117 15.209C46.7117 12.1507 46.6669 9.22034 46.5772 6.41808H50.8808L51.5308 9.24294C51.9492 8.18832 52.5768 7.41996 53.4136 6.93785C54.2504 6.44068 55.2366 6.19209 56.3723 6.19209ZM53.974 14.9153C54.6464 14.9153 55.2068 14.7043 55.655 14.2825C56.1183 13.8456 56.3499 13.2806 56.3499 12.5876C56.3499 11.8192 56.1407 11.194 55.7223 10.7119C55.3039 10.2298 54.736 9.9887 54.0188 9.9887C53.1969 9.9887 52.5768 10.1921 52.1584 10.5989C51.74 10.9906 51.5308 11.6535 51.5308 12.5876C51.5308 13.1149 51.6653 13.5593 51.9343 13.9209C52.2032 14.2674 52.5245 14.5235 52.8981 14.6893C53.2717 14.8399 53.6303 14.9153 53.974 14.9153Z"
            fill="#0F0A2F"
          />
          <path
            d="M68.9776 9.71752C68.9626 10.6215 68.9552 12.0075 68.9552 13.8757C68.9552 16.1205 68.9701 17.7476 69 18.7571H63.7102L63.7326 16.2034C63.7625 13.4011 63.7775 11.2392 63.7775 9.71752C63.7775 8.27119 63.7625 6.22222 63.7326 3.57062L63.7102 1.12994H69C68.9701 3.2693 68.9552 5.01695 68.9552 6.37288C68.9552 7.87947 68.9626 8.99435 68.9776 9.71752Z"
            fill="#0F0A2F"
          />
        </svg>
      </div>
    </div>
    <div
      class="h-11 relative overflow-hidden select-none cursor-pointer"
      @click="isDialogShown = true"
    >
      <SwenBg class="absolute top-0 mt-[-18%] left-0 w-[110%]" />
      <Vue3Marquee class="!h-11">
        <div class="relative flex h-6 items-center custom-shadow">
          <span
            class="mx-1 text-[#0F0A2F] font-semibold text-xs/[20px] text-nowrap uppercase"
          >
            By leaving a tip, you take care of nature
          </span>
          <div class="h-full min-w-[18.5px] mx-1">
            <SWenLogo class="h-full w-max flex-shrink-0" />
          </div>
          <span
            class="mx-1 text-[#0F0A2F] font-semibold text-xs/[20px] text-nowrap uppercase"
          >
            Part of the profit goes to sWen</span
          >
          <div class="h-full min-w-[18.5px] mx-1">
            <SWenLogo class="h-full w-max flex-shrink-0" />
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </header>
  <main>
    <div class="mb-3">
      <div class="mt-4 mb-5 flex justify-between items-center">
        <div class="rounded-r-full overflow-hidden">
          <img src="./assets/left-waiter.jpg" />
        </div>
        <div class="flex items-center gap-3">
          <div
            class="w-[92px] h-[92px] bg-[url('./assets/waiter.jpg')] bg-cover bg-center rounded-full"
          ></div>
          <div>
            <div class="text-[#0F0A2F] font-semibold text-[22px]/[24px]">
              Madison
            </div>
            <div class="text-[#9771FD] font-semibold text-[16px]/[20px] mt-1">
              Waiter
            </div>
          </div>
        </div>
        <div class="rounded-l-full overflow-hidden">
          <img src="./assets/right-waiter.jpg" />
        </div>
      </div>
      <div
        class="mx-5 bg-white rounded-[20px] h-24 relative pt-3 flex justify-center"
      >
        <span class="font-medium text-[15px]/[24px]">
          Enter amount of tips
        </span>
        <div class="flex justify-center absolute top-[41.53px] w-full">
          <div class="flex-grow basis-full" />

          <input
            class="flex-shrink basis-0 w-min font-bold text-[34px]/[36px] inline focus:outline-none text-center focus:text-[#0F0A2F] focus:opacity-100 placeholder:text-black placeholder:opacity-10"
            placeholder="0€"
            :value="amountEur > 0 ? asdd : ''"
            @input="onAmountChange"
          />
          <div class="flex-grow" />
        </div>
      </div>
      <div class="mt-2 mx-5 flex flex-nowrap h-[34px] gap-1 items-stretch">
        <div
          class="flex cursor-pointer flex-grow items-center justify-center rounded-xl flex-1"
          :class="
            amountEur === 2
              ? 'bg-[#9771FD] text-white'
              : 'bg-white text-[#1F2A37]'
          "
          @click="amountEur = 2"
        >
          <span class="font-semibold text-[13px]/[18px]">2</span>
        </div>
        <div
          class="flex cursor-pointer flex-grow items-center justify-center rounded-xl flex-1"
          :class="
            amountEur === 5
              ? 'bg-[#9771FD] text-white'
              : 'bg-white text-[#1F2A37]'
          "
          @click="amountEur = 5"
        >
          <span class="font-semibold text-[13px]/[18px]">5</span>
        </div>
        <div
          class="flex cursor-pointer flex-grow items-center justify-center rounded-xl flex-1"
          :class="
            amountEur === 100
              ? 'bg-[#9771FD] text-white'
              : 'bg-white text-[#1F2A37]'
          "
          @click="amountEur = 100"
        >
          <span class="font-semibold text-[13px]/[18px]">100</span>
        </div>
      </div>
    </div>
    <div class="mx-5 flex flex-col gap-4">
      <RateSmth name="Rate your experience" />
      <RateSmth name="Rate Service" />
      <div class="flex flex-col gap-3 items-center">
        <span class="font-medium text-black text-[15px]/[20px]"
          >What did you like?</span
        >
        <div class="flex flex-nowrap w-full gap-3">
          <GavnoEbanoe name="Service">
            <img
              class="absolute top-0 left-1/2 -translate-x-1/2 w-full"
              src="./assets/tag(2).svg"
            />
          </GavnoEbanoe>

          <GavnoEbanoe name="Cleanliness"
            ><img
              class="absolute top-0 left-1/2 -translate-x-1/2 w-full"
              src="./assets/tag(3).svg"
          /></GavnoEbanoe>
          <GavnoEbanoe name="Atmosphere"
            ><img
              class="absolute top-0 left-1/2 -translate-x-1/2 w-full"
              src="./assets/tag(4).svg"
          /></GavnoEbanoe>
          <GavnoEbanoe name="Food quality"
            ><img
              class="absolute top-0 left-1/2 -translate-x-1/2 w-full"
              src="./assets/tag(5).svg"
          /></GavnoEbanoe>
        </div>
      </div>
      <div class="flex flex-col gap-3 items-center">
        <span class="font-medium text-black text-[15px]/[20px]"
          >Share your fedback</span
        >
        <div
          class="rounded-[20px] w-full bg-white p-[20px] text-[#808191] font-normal text-[17px]/[24px] min-h-[104px] focus:outline-none"
          contenteditable
          @focus="isDescribing = true"
          @blur="handleDescribe"
        >
          {{
            !isDescribing && description.length === 0
              ? "Describe your own"
              : description
          }}
        </div>
      </div>
    </div>
    <div
      class="mt-3 mx-5 rounded-xl bg-white p-4 flex justify-center items-center gap-2 flex-nowrap"
    >
      <div class="flex flex-col gap-1 flex-shrink flex-grow">
        <span class="text-black font-medium text-[14px]/[20px]">
          I want Mark to receive<br />the full amount
        </span>
        <span class="text-[#808191] font-normal text-[12px]/[14px]">
          You compensate service fee of 0.00€,<br />which will be applied to
          your payment.
        </span>
      </div>
      <div
        class="flex-grow-0 flex-shrink-0 w-[54px] h-[30px] rounded-[22px] bg-[#8E6CEA66]/40 p-[3px] relative overflow-hidden"
      >
        <div class="w-6 h-6 bg-white asd-shadow rounded-full" />
      </div>
    </div>
    <div class="mt-[50px] pt-6 px-5 pb-8 bg-white rounded-t-[20px]">
      <div class="flex justify-between items-center">
        <span class="text-black font-medium text-[15px]/[24px]"
          >To pay {{ amountEur }}€</span
        >
        <span class="text-[#808191] font-medium text-[14px]/[20px]">
          Service fees 0€
        </span>
      </div>
      <hr class="my-3 border-[#F3F3F3]" />
      <div
        class="flex justify-center items-center bg-[#0F0A2F] rounded-[40px] h-11 gap-[10px] text-white font-medium text-[16px]/[24px]"
      >
        <span>Pay with</span>
        <svg
          class="h-6"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.44544 6.66696C10.7514 6.66696 11.7518 7.17197 12.4466 8.18199L12.3694 8.23024C12.3179 8.26884 12.2632 8.31065 12.2053 8.35569C12.1474 8.39429 12.0734 8.45218 11.9834 8.52938C11.8997 8.60015 11.8161 8.68378 11.7325 8.78028C11.6488 8.87035 11.5588 8.97328 11.4623 9.08908C11.3722 9.19844 11.2886 9.32711 11.2114 9.47507C11.1406 9.6166 11.0731 9.76779 11.0087 9.92862C10.9508 10.083 10.9026 10.2599 10.864 10.4594C10.8318 10.6588 10.8157 10.8614 10.8157 11.0673C10.8157 11.4919 10.8865 11.8875 11.028 12.2542C11.1696 12.6145 11.3304 12.904 11.5105 13.1227C11.6906 13.3415 11.8901 13.5345 12.1088 13.7017C12.3275 13.869 12.4916 13.9816 12.601 14.0395C12.7168 14.0974 12.7972 14.1327 12.8422 14.1456C12.8293 14.1971 12.7907 14.3097 12.7264 14.4834C12.6685 14.6571 12.5527 14.924 12.379 15.2843C12.2117 15.6446 12.022 15.9855 11.8097 16.3072C11.6038 16.6031 11.4333 16.8379 11.2982 17.0116C11.1631 17.1789 10.9926 17.3655 10.7868 17.5713C10.5809 17.7772 10.3654 17.9284 10.1402 18.0249C9.9215 18.1214 9.68991 18.1696 9.44544 18.1696C9.11091 18.1696 8.71527 18.0699 8.25851 17.8705C7.80175 17.671 7.37072 17.5713 6.96542 17.5713C6.55369 17.5713 6.10337 17.6743 5.61444 17.8801C5.12551 18.086 4.7363 18.1889 4.4468 18.1889C4.02221 18.1889 3.63621 18.0313 3.28882 17.7161C2.94785 17.4008 2.54899 16.9183 2.09223 16.2686C1.62904 15.606 1.24626 14.8211 0.943895 13.914C0.647965 13.0005 0.5 12.1031 0.5 11.2217C0.5 10.514 0.609365 9.8675 0.828096 9.28207C1.04683 8.69665 1.33632 8.22059 1.69659 7.85389C2.05685 7.4872 2.46214 7.20413 2.91247 7.0047C3.3628 6.80527 3.82921 6.70556 4.3117 6.70556C4.67197 6.70556 5.12551 6.81492 5.67234 7.03365C6.2256 7.25238 6.59229 7.36175 6.77242 7.36175C6.92682 7.36175 7.30317 7.24595 7.90146 7.01435C8.49975 6.78275 9.01441 6.66696 9.44544 6.66696ZM8.9147 5.42212C8.65737 5.73092 8.33249 5.98825 7.94006 6.19411C7.55407 6.39998 7.19059 6.50291 6.84962 6.50291C6.77886 6.50291 6.71131 6.49647 6.64698 6.48361C6.62768 6.40641 6.61803 6.31313 6.61803 6.20376C6.61803 5.83707 6.69844 5.47037 6.85927 5.10367C7.0201 4.73698 7.21632 4.41853 7.44792 4.14834C7.72455 3.82667 8.06873 3.55969 8.48045 3.3474C8.89862 3.12867 9.29748 3.01287 9.67704 3C9.69634 3.08363 9.70599 3.18335 9.70599 3.29915C9.70599 4.0647 9.44223 4.77236 8.9147 5.42212Z"
            fill="white"
          />
          <path
            d="M16.6354 4.09044H22.2516C23.6412 4.09044 24.767 4.52468 25.6291 5.39317C26.4976 6.26166 26.9318 7.39713 26.9318 8.79958C26.9318 10.1763 26.4847 11.2957 25.5905 12.1577C24.7027 13.0198 23.5544 13.4508 22.1455 13.4508H19.1251V18.0152H16.6354V4.09044ZM19.1251 6.17481V11.3857H21.5858C22.48 11.3857 23.1716 11.1606 23.6605 10.7103C24.1559 10.2599 24.4036 9.62304 24.4036 8.79958C24.4036 7.95039 24.1591 7.30063 23.6702 6.8503C23.1877 6.39998 22.4961 6.17481 21.5955 6.17481H19.1251Z"
            fill="white"
          />
          <path
            d="M31.6032 16.3072C32.3237 16.3072 32.9252 16.1013 33.4077 15.6896C33.8902 15.2714 34.1315 14.7568 34.1315 14.1456V13.3061L31.7479 13.4605C30.4356 13.5441 29.7794 14.0202 29.7794 14.8887C29.7794 15.3261 29.9466 15.6735 30.2812 15.9308C30.6221 16.1817 31.0628 16.3072 31.6032 16.3072ZM30.8987 18.1889C29.8694 18.1889 29.0299 17.8994 28.3801 17.3204C27.7304 16.7414 27.4055 15.9759 27.4055 15.0238C27.4055 14.0716 27.7497 13.3254 28.438 12.785C29.1328 12.2446 30.1235 11.9358 31.4102 11.8586L34.1315 11.6945V10.8068C34.1315 10.2857 33.961 9.8868 33.62 9.61017C33.2791 9.33354 32.7869 9.19523 32.1436 9.19523C31.5903 9.19523 31.1336 9.29172 30.7733 9.48472C30.413 9.67129 30.1782 9.94148 30.0689 10.2953H27.8108C27.9073 9.36249 28.3576 8.62267 29.1618 8.07584C29.9724 7.52258 31.0049 7.24595 32.2594 7.24595C33.6104 7.24595 34.6526 7.55796 35.3859 8.18199C36.1258 8.80601 36.4957 9.68094 36.4957 10.8068V18.0152H34.1894V16.5677H34.0253C33.7294 17.076 33.3048 17.4748 32.7515 17.7643C32.2047 18.0474 31.5871 18.1889 30.8987 18.1889Z"
            fill="white"
          />
          <path
            d="M39.1599 21.8462C38.6645 21.8462 38.3493 21.8334 38.2142 21.8076V19.8487C38.3364 19.8744 38.5551 19.8873 38.8704 19.8873C39.3786 19.8873 39.7807 19.7811 40.0766 19.5689C40.379 19.3566 40.6073 19.0092 40.7617 18.5267L40.8872 18.0635L37.1141 7.45825H39.7389L42.2092 15.6992H42.3733L44.834 7.45825H47.3623L43.5506 18.353C43.1067 19.6589 42.5598 20.566 41.9101 21.0742C41.2668 21.5889 40.35 21.8462 39.1599 21.8462Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        class="flex justify-center items-center bg-[#9771FD] rounded-[40px] h-11 gap-[10px] text-white font-medium text-[16px]/[24px] mt-2"
      >
        <span>Pay with debit card</span>
      </div>
      <div
        class="mt-3 font-medium text-[#808191] text-[11px]/[15px] text-center"
      >
        By clicking the button, you agree to our
        <span class="text-[#9771FD]">Terms of Use</span> and
        <span class="text-[#9771FD]">Privacy Policy</span>, and
        <span class="text-[#9771FD]">authorize payment</span> and
        <span class="text-[#9771FD]">data processing</span>.
      </div>
    </div>
  </main>
  <div
    v-if="isDialogShown"
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10000px] h-[10000px] bg-black/20 z-40"
    @click="isDialogShown = false"
  />
  <div
    v-if="isDialogShown"
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-[24px] p-[12px] gap-4 flex flex-col"
  >
    asd
  </div>
</template>

<style scoped>
.custom-shadow {
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.3));
}

.asd-shadow {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
}
</style>
