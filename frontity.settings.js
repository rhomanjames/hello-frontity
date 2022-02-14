const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      "url": "https://northamericanplastics697336576.wordpress.com",
      "title": "North American Plastics",
      "description": "North American Plastics"
    }
  },
  "packages": [
    {
      "name": "@frontity/google-analytics",
      "state": {
        "googleAnalytics": {
          "trackingId": "UA-181012786-1",
        },
        "analytics": {
          "pageviews": { "googleAnalytics": true },
          "events": { "googleAnalytics": true }
        },
      },
    },
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/home"
            ],
            [
              "About",
              "/about/"
            ],
            [
              "Brands",
              "/brands/"
            ],
            [
              "Career",
              "/career/"
            ],
            [
              "Sustainability",
              "/sustainability/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://northamericanplastics697336576.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
