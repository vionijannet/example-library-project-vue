<template>
  <span class="card-expand">
    <p class="cutoff-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt enim vitae impedit unde rem
      consectetur ipsa nihil laudantium, possimus quidem, sint provident dolorem distinctio reprehenderit atque dolores
      consequatur sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt enim vitae impedit
      unde rem consectetur ipsa nihil laudantium, possimus quidem, sint provident dolorem distinctio reprehenderit atque
      dolores consequatur sed.
    </p>
    <input type="checkbox" name="" id="" class="expand-btn">
  </span>
  <span class="card-expand">
    <p class="cutoff-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt enim vitae impedit unde rem
      consectetur ipsa nihil laudantium, possimus quidem, sint provident dolorem distinctio reprehenderit atque dolores
      consequatur sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt enim vitae impedit
      unde rem consectetur ipsa nihil laudantium, possimus quidem, sint provident dolorem distinctio reprehenderit atque
      dolores consequatur sed.
    </p>
    <input type="checkbox" name="" id="" class="expand-btn">
  </span>
  <div>
    <ButtonGista @click="alertSomething">hehehe</ButtonGista>
    <InputGista v-model="input" :labelText="'hehehe'"></InputGista>
    <SelectGista v-model="op" :options="list"></SelectGista>
  </div>
</template>

<script setup lang="ts">
import { Option } from "vite-project-library/dist/types";
import { ref } from "vue";

const input = ref("");
const op: Ref<Option> = ref({
  text: "",
  value: "",
});
const list: Option[] = [
  {
    text: "1",
    value: "1",
  },
  {
    text: "2",
    value: "2",
  },
  {
    text: "3",
    value: "3",
  },
  {
    text: "14",
    value: "14",
  },
  {
    text: "25",
    value: "25",
  },
  {
    text: "36",
    value: "36",
  }
]

function alertSomething(): void {
  window.alert("pe");
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
