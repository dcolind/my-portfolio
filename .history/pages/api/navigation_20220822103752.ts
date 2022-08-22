export default (req, res) => {
    res.status(200).json([
      {children: "Home", href: "/"},
      {children: "About", href: "/about"},
      {children: "Experience", href: "/experience"},
      {children: "Projects", href: "/projects"},
    ])
  }