import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const ModeratorNavbar = ({ isConnected }) => {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("[Moderator Logout] Logout request failed:", error);
    } finally {
      localStorage.removeItem("token");

      navigate("/moderate/logs/workspace", {
        replace: true,
      });

      setLoggingOut(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top py-2 px-3 shadow-sm">
        <div className="container-fluid px-0">
          {/* Brand */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
              style={{
                width: "38px",
                height: "38px",
                backgroundColor: "#5c1d24",
                flexShrink: 0,
              }}
            >
              E
            </div>

            <span
              className="navbar-brand fw-bold mb-0 fs-5 text-dark"
              style={{
                fontFamily: "Georgia, serif",
                whiteSpace: "nowrap",
              }}
            >
              E-chat{" "}
              <span className="fs-6 fw-normal text-muted ms-1 moderator-console-text">
                Moderator Console
              </span>
            </span>
          </div>

          {/* Navigation & Socket Status */}
          <div className="d-flex align-items-center gap-3 ms-auto flex-nowrap">
            <ul className="navbar-nav d-flex flex-row gap-2 flex-nowrap">
              <li className="nav-item">
                <NavLink
                  to="home"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill fw-medium transition-all ${
                      isActive ? "active shadow-sm" : ""
                    }`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#5c1d24" : "transparent",
                    color: isActive ? "#ffffff" : "#6c757d",
                    whiteSpace: "nowrap",
                  })}
                >
                  <i className="bi bi-chat-dots-fill me-1"></i>
                  Home/Announcment
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="messages"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill fw-medium transition-all ${
                      isActive ? "active shadow-sm" : ""
                    }`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#5c1d24" : "transparent",
                    color: isActive ? "#ffffff" : "#6c757d",
                    whiteSpace: "nowrap",
                  })}
                >
                  <i className="bi bi-chat-dots-fill me-1"></i>
                  Messages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="stats"
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill fw-medium transition-all ${
                      isActive ? "active shadow-sm" : ""
                    }`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#5c1d24" : "transparent",
                    color: isActive ? "#ffffff" : "#6c757d",
                    whiteSpace: "nowrap",
                  })}
                >
                  <i className="bi bi-bar-chart-line-fill me-1"></i>
                  Analytics
                </NavLink>
              </li>
            </ul>

            {/* Connection Status */}
            <div className="d-flex align-items-center gap-2 flex-shrink-0 connection-status">
              <span
                className={`rounded-circle ${
                  isConnected ? "bg-success" : "bg-secondary"
                }`}
                style={{
                  width: "8px",
                  height: "8px",
                  flexShrink: 0,
                }}
              ></span>

              <span
                className="text-muted"
                style={{
                  fontSize: "0.75rem",
                  whiteSpace: "nowrap",
                }}
              >
                {isConnected ? "Connected" : "Offline"}
              </span>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="btn btn-sm d-flex align-items-center gap-2 rounded-pill px-3 flex-shrink-0"
              style={{
                backgroundColor: "#f8e9eb",
                color: "#5c1d24",
                border: "none",
                fontSize: "0.8rem",
                fontWeight: "600",
                whiteSpace: "nowrap",
              }}
            >
              <i className="bi bi-box-arrow-right"></i>
              {loggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile-only responsive adjustments */}
      <style>
        {`
          @media (max-width: 768px) {
            .navbar {
              padding-left: 8px !important;
              padding-right: 8px !important;
            }

            .moderator-console-text {
              display: none;
            }

            .navbar-brand {
              font-size: 0.95rem !important;
            }

            .navbar-brand .fs-6 {
              font-size: 0.8rem !important;
            }

            .navbar .container-fluid {
              gap: 6px;
            }

            .navbar .d-flex.align-items-center.gap-3 {
              gap: 4px !important;
            }

            .navbar-nav {
              gap: 2px !important;
            }

            .navbar-nav .nav-link {
              padding: 5px 7px !important;
              font-size: 0.68rem !important;
              line-height: 1.2;
            }

            .navbar-nav .nav-link i {
              margin-right: 2px !important;
              font-size: 0.65rem;
            }

            .connection-status {
              gap: 3px !important;
            }

            .connection-status span:last-child {
              font-size: 0.62rem !important;
            }

            .navbar button {
              padding: 5px 8px !important;
              font-size: 0.65rem !important;
              gap: 3px !important;
            }

            .navbar button i {
              font-size: 0.7rem;
            }
          }

          @media (max-width: 480px) {
            .navbar {
              padding-top: 6px !important;
              padding-bottom: 6px !important;
            }

            .navbar-brand {
              font-size: 0.82rem !important;
            }

            .navbar .rounded-circle {
              width: 10px !important;
              height: 10px !important;
              font-size: 0.8rem !important;
            }

            .navbar-nav .nav-link {
              padding: 4px 5px !important;
              font-size: 0.58rem !important;
            }

            .navbar-nav .nav-link i {
              font-size: 0.58rem;
            }

            .connection-status span:last-child {
              font-size: 0.55rem !important;
            }

            .navbar button {
              padding: 4px 6px !important;
              font-size: 0.58rem !important;
            }

            .navbar button i {
              font-size: 0.62rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ModeratorNavbar;
