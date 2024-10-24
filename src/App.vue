<template>
  <span class="card-expand">
    <p class="cutoff-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt enim vitae impedit unde rem consectetur ipsa nihil laudantium, possimus quidem, sint provident dolorem distinctio reprehenderit atque dolores consequatur sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt enim vitae impedit unde rem consectetur ipsa nihil laudantium, possimus quidem, sint provident dolorem distinctio reprehenderit atque dolores consequatur sed.
    </p>
    <input type="checkbox" name="" id="" class="expand-btn">
  </span>
  <span class="card-expand">
    <p class="cutoff-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt enim vitae impedit unde rem consectetur ipsa nihil laudantium, possimus quidem, sint provident dolorem distinctio reprehenderit atque dolores consequatur sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt enim vitae impedit unde rem consectetur ipsa nihil laudantium, possimus quidem, sint provident dolorem distinctio reprehenderit atque dolores consequatur sed.
    </p>
    <input type="checkbox" name="" id="" class="expand-btn">
  </span>
  <div>
    <ButtonGista @click="alertSomething">hehehe</ButtonGista>
    <InputGista v-model="input" :labelText="'hehehe'"></InputGista>
  </div>
</template>

<script setup lang="ts">
import { Option } from "vite-project-library/dist/types";
import { ref } from "vue";

const input = ref("");
function alertSomething(): void {
  window.alert("pe");

  const x: Option = {
    text: "someh",
    value: "somep",
  }

  console.log(x);
}
</script>

<style scoped>
.cutoff-text {
  --max-lines: 1;
  --line-height: 1.4;

  max-height: calc(var(--max-lines) * 1em * var(--line-height));
  line-height: var(--line-height);

  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}

.cutoff-text::before {
  content: "";
  position: absolute;
  height: calc(1em * var(--line-height));
  widows: 100%;
  bottom: 0;
  pointer-events: none;
}

.expand-btn {
  appearance: none;
  cursor: pointer;
}

.expand-btn::before {
  content: "show more";
}

.expand-btn:checked:before {
  content: "show less";
}

.cutoff-text:has(+ .expand-btn:checked) {
  max-height: none;
}
</style>
