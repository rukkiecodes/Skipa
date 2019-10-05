<template>
  <v-container class="about">
    <v-layout>
      <v-flex>
        <Nav1 />
      </v-flex>
    </v-layout>

    <v-layout class="caption">
      <v-row justify="center">
        <p class="text-center my-10">We Don’t Just Store Photos And Videos — It’s How We Promote Art</p>
      </v-row>
    </v-layout>

    <v-layout class="img">
      <v-row justify="center">
        <v-img
          src="@/assets/bg8.jpg"
          width="100"
          height="50vh"
          gradient="to left, rgba(0,0,0,.2), rgba(0,0,0,.9)"
          class="pa-10"
        >
          <v-row align="start" class="fill-height">
            <p class="p1 white--text">
              "I think it's cool to be smart, and I think it's sexy to be smart."
              <i>- Stacey Farber</i>
            </p>
          </v-row>
          <p class="p2 white--text">Skippa helps u stay smart</p>
        </v-img>
      </v-row>
    </v-layout>

    <v-layout class="words my-10">
      <v-row>
        <blockquote
          class="my-5"
        >Since September 2018, Skippa has been a really helpful tool to both photographers and videographers, in enhancing their popularity and business chances. Not bland corporate crap created to fill up a company webpage.</blockquote>
        <blockquote class="my-5">
          These days, that’s
          <a
            class="subtitle-1"
            onclick="window.open('https://en.wikipedia.org/wiki/Cloud_storage')"
          >
            <i class="blue--text">cloud storage</i>
          </a> followed by a little
          <a
            class="subtitle-1"
            onclick="window.open('https://en.wikipedia.org/wiki/Content_marketing')"
          >
            <i class="blue--text">content marketing</i>
          </a>, and it’s the backbone of getting your company noticed, attracting prospects, and turning them into loyal customers and clients.
        </blockquote>
        <blockquote
          class="my-5"
        >Our Mission is to help you create the kind of audience-focused storage and content that helps you reach your business goals.</blockquote>

        <h1>Your free storage content marketing education:</h1>

        <blockquote
          class="my-5"
        >How did we know back in 2006 that content marketing would become so important? Like, a $44 billion a year industry important?</blockquote>
        <blockquote
          class="my-5"
        >Well, because content has been a smart way to find more customers and clients for at least 100 years. But now the internet has empowered prospective customers and clients to the point that content has become the smartest way to market online.</blockquote>
        <blockquote
          class="my-5"
        >Today, Skippa brings you original, relevant content every week about what’s working right now in online content marketing. And we’re not too humble to say it’s the most popular content marketing and writing blog on the planet.</blockquote>

        <i>"Skippa is The Bible of Art Storage."</i>
      </v-row>
    </v-layout>

    <v-layout class="words">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <p>What can you expect?</p>
      </v-flex>
    </v-layout>

    <v-layout class="words">
      <v-row>
        <ul>
          <li>It’s not (just) about Storage.</li>
          <li>It’s not (just) about Safty.</li>
          <li>It’s not (just) about social media.</li>
          <li>It’s not (just) about blogging or email marketing or conversion.</li>
        </ul>

        <blockquote
          class="my-10"
        >Today, it’s always a bigger picture. You need to understand all the facets of effective storage and content marketing, and we cover the gamut, daily … for free.</blockquote>
      </v-row>
    </v-layout>

    <Footer />
  </v-container>
</template>

<script>
import Nav1 from "./Nav1";
import Footer from "./Footer";
export default {
  components: {
    Nav1,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.about {
  background: #fff;

  .caption {
    width: 75%;
    text-align: center;
    margin: auto;
    @media (max-width: 600px) {
      width: 100%;
    }

    p {
      font-size: 4em;
      line-height: 1em;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.8);
      @media (max-width: 768px) {
        font-size: 2em;
      }
    }
  }
  .img {
    width: 75%;
    margin: auto;
    @media (max-width: 768px) {
      width: 100%;
    }

    .p1 {
      font-size: 1.9em;
      font-weight: 300;
      width: 35%;
      @media (max-width: 768px) {
        font-size: 1.5em;
        width: 80%;
      }

      i {
        font-size: 0.6em;
      }
    }

    .p2 {
      font-size: 1.2em;
      letter-spacing: 0.1em;
      font-weight: 200;
    }
  }
  .words {
    width: 75%;
    margin: auto;
    @media (max-width: 768px) {
      width: 98%;
    }

    blockquote,
    i,
    p,
    ul li {
      font-size: 1.3em;
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>