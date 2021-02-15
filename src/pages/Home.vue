<template>
  <div>
    <form @submit.prevent="onSubmit(countryCode, enableTotal)">
      <div class="queryContainer">
        <div class="countryQuery">
          <p class="countryLabel">Country:</p>
          <v-autocomplete
            v-model="countryCode"
            :items="countries"
            dense
            filled
          ></v-autocomplete>
        </div>
        <div class="total">
          <p class="totalLabel">Total Death:</p>
          <v-autocomplete
            v-model="enableTotal"
            :items="total"
            dense
            filled
          ></v-autocomplete>
        </div>
        <button class="submitButton" type="submit">Submit</button>
      </div>
    </form>
    <div>
      <p>chart data</p>
      <p>{{ currentChartData }}</p>
      <p>Total Death</p>
      <p>{{ currentTotalDeath }}</p>
    </div>
  </div>
</template>
<script>
import { GET_CHARTDATA } from "../store/types/actions.type";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    countries: ["SVN", "HRV", "GBR"],
    total: [true, false],
    countryCode: "SVN",
    enableTotal: false,
  }),
  methods: {
    onSubmit(countryCode, enableTotal) {
      this.$store.dispatch(
        GET_CHARTDATA,
        `country_code=${countryCode}&total_death=${enableTotal}`
      );
    },
  },
  computed: {
    ...mapGetters(["currentChartData", "currentTotalDeath"]),
  },
};
</script>
<style scoped>
.queryContainer {
  margin: 20px 15px;
  border: 1px solid black;
  max-width: 32rem;
  padding: 15px 10px;
}
.countryQuery {
  display: flex;
  align-items: center;
  padding: 15px;
}
.countryLabel {
  width: 30%;
}
.total {
  display: flex;
  align-items: center;
  padding: 15px;
}
.totalLabel {
  width: 30%;
}
.submitButton {
  border: 1px solid black;
  padding: 1px 5px;
  border-radius: 3px;
}
</style>
