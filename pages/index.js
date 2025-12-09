import { useState } from "react";

function Home() {
  const [answer, setAnswer] = useState("");

  const yesReplies = ["Então divide essa sua beleza ai comigo. 😏"];

  const noReplies = [
    "Que pena! Queria saber se não tinha como você dividir essa sua beleza ai comigo. 😏",
  ];

  function handleClick(type) {
    const list = type === "yes" ? yesReplies : noReplies;
    const random = list[Math.floor(Math.random() * list.length)];
    setAnswer(random);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #ffe4ec 0%, #fff5f7 50%, #e3f2ff 100%)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2.5rem 2rem",
          borderRadius: "1.25rem",
          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "#111827",
            marginBottom: "1.5rem",
          }}
        >
          Você tem uma calculadora aí?
        </p>

        <div
          style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}
        >
          <button
            onClick={() => handleClick("yes")}
            style={{
              padding: "0.6rem 1.4rem",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.95rem",
              backgroundColor: "#ec4899",
              color: "white",
              boxShadow: "0 8px 20px rgba(236, 72, 153, 0.35)",
            }}
          >
            SIM
          </button>
          <button
            onClick={() => handleClick("no")}
            style={{
              padding: "0.6rem 1.4rem",
              borderRadius: "999px",
              border: "1px solid #d1d5db",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "0.95rem",
              backgroundColor: "white",
              color: "#4b5563",
            }}
          >
            NÃO
          </button>
        </div>

        {answer && (
          <div style={{ marginTop: "1.75rem" }}>
            <p
              style={{
                fontSize: "0.98rem",
                color: "#374151",
              }}
            >
              {answer}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
