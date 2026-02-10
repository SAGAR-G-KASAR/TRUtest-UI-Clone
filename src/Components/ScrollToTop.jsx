// this is not a component but this very important page to when we refresh page is always navigate in "./home page"
// If you in middle of page its also help to start in top 0,s position

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  // above use effect is use for when you middle on the page and you navigate to other page when is always open this page into starts

  useEffect(() => {
    navigate("/");
  }, [navigate]);
  //above use effect is for when site refresh is always starts in home page
  return null;
}
