<template>
  <div>
    <div id="error--summary-container">
      <div id="error--summary">
        <div id="error--num">404</div>
        <div id="error--text">Page not found</div>
      </div>
    </div>
    <div id="error--details">
      <p>The page or resource you requested couldn't be found. The file may have been moved or deleted.</p>
      <p>We suggest you:</p>
      <ul>
        <li>Check the URL for errors</li>
        <li>
          <router-link :to="{ name: 'home' }">Go to the homepage</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/vars";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins";

  #error--summary-container {
    background: $colourPrimary;
    font-weight: 300;
    margin: -1.5em -1.5em 0;
    padding: 4em 0;

    #error--summary {
      text-align: center;

      #error--num {
        color: #888;
        font-size: 40px;
      }

      #error--text {
        color: #ddd;
        line-height: 1;
        font-size: 40px;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.35);
      }
    }

    @include media-breakpoint-up(md) {
      #error--summary {
        display: table;
        margin: 0 auto;
        width: 100%;

        #error--num {
          display: table-cell;
          font-size: 60px;
          padding-right: 0.4em;
          position: relative;
          text-align: right;
          vertical-align: middle;
          width: 3.75em;

          &:after {
            background: #888;
            content: "";
            display: block;
            position: absolute;
            height: 80%;
            right: 0;
            top: 10%;
            width: 3px;
          }
        }
        #error--text {
          display: table-cell;
          padding-left: 1em;
          text-align: left;
          vertical-align: middle;
        }
      }
    }

    @include media-breakpoint-up(lg) {
      #error--summary {
        #error--num {
          font-size: 80px;
        }
        #error--text {
          font-size: 50px;
        }
      }
    }
  }

  #error--details {
    margin-top: 1.5em;
  }
</style>
