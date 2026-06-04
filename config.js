// ─────────────────────────────────────────────
// LAUNCH HUB CONFIG
// Update these values for each new launch.
// ─────────────────────────────────────────────

const LAUNCH_HUB_CONFIG = {

  // Your Monday.com API token
  // Store this in a GitHub secret or environment variable in production
  MONDAY_TOKEN: "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjY1NzcwMzM3NSwiYWFpIjoxMSwidWlkIjo4MjY0Njg5NiwiaWFkIjoiMjAyNi0wNS0xM1QwMDo0NjoxMC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NzA5Mjc2LCJyZ24iOiJ1c2UxIn0.yD_YwplvFrgMpNEUU-rGQNz6GscMVfTiomF1PW4fB0c",

  // The single board ID that contains all 5 groups
  BOARD_ID: "18388701820",

  // Monday group IDs — update if groups are renamed/recreated
  GROUPS: {
    LAUNCH_INFO: "group_title",
    TIMELINE:    "topics",
    RESOURCES:   "group_mm02ffen",
    PRODUCTS:    "group_mm02y11a",
    NOTES:       "group_mm40wwdj"
  },

  // Column IDs — update if columns change
  COLUMNS: {
    NAME:           "name",
    LAUNCH_DATE:    "date_mm40n3fz",
    LAUNCH_TIME:    "text_mm4027gn",
    OWNER:          "text_mm40pc5j",
    NOTES:          "long_text_mm405hdn",
    URL:            "link_mm40t1br",
    CATEGORY:       "dropdown_mm40kv1z",
    BIGCOMMERCE_URL:"link_mm40z35t",
    SEVERITY:       "color_mm403mv0",
    STATUS:         "status"
  }

};
