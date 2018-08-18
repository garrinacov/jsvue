<template>
  <v-form v-model="valid" id="formid" table width="300px">
    <v-text-field
      v-model="Email"
      :rules="emailRules"
      label="Email"
      type="text"
      id="editemail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      type="password"
      id="editpassword"
      required
    ></v-text-field>
    <v-btn color="blue" class="white--text" @click="signUp()">submit</v-btn>
  </v-form>
</template>

<style>
#formid{
  border: 110x;
  box-shadow: 0mm;
  position: center;
  padding-top: 100px;
  
}
</style>

