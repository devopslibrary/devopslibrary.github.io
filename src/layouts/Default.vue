<template>
  <div>
    <AppHeader />
    <slot /> <!-- Page content will be inserted here  -->
    <AppFooter />
  </div>
</template>

<script>
  import AppHeader from "../components/layout/AppHeader";
  import AppFooter from "../components/layout/AppFooter";

  export default {
    components: {
      AppHeader,
      AppFooter
    },
  }
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
