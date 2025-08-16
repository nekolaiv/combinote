# 📚 Combinote

A centralized, collaborative repository for classroom notes.  
Create classrooms ➝ Add notes ➝ Share knowledge.  
Built with [Next.js 15](https://nextjs.org/), [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/), and [NextAuth.js](https://next-auth.js.org/).  

---

## 🚀 Features

- 👥 **User Authentication** — Secure login with GitHub (more providers coming soon).  
- 🏫 **Create Classrooms** — Organize your subjects, projects, or study groups.  
- 📝 **Add Notes** — Centralized notes within each classroom.  
- 🔍 **View & Share** — Easily browse notes for a specific classroom.  
- 🌐 **Deployed on Vercel** — Free, fast, and scalable hosting.  

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)  
- **UI**: Tailwind CSS + shadcn/ui  
- **Auth**: NextAuth.js  
- **Database**: PostgreSQL (Neon.tech free tier)  
- **ORM**: Prisma  
- **Validation**: Zod  
- **Deployment**: Vercel  

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/nekolaiv/combinote.git
cd classhive
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require"
NEXTAUTH_SECRET="your_generated_secret"
NEXTAUTH_URL="http://localhost:3000"

# For GitHub auth (or other providers)
GITHUB_ID=your_client_id
GITHUB_SECRET=your_client_secret
```

### 4. Initialize Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the development server

```bash
npm run dev
```

Visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🧭 Roadmap

* ✅ Basic classrooms + notes functionality
* ✅ User authentication
* ⏳ Notes search & filtering
* ⏳ Real-time collaboration (WebSockets / Liveblocks)
* ⏳ File uploads (PDF, images, etc.)
* ⏳ Mobile app (React Native or Expo)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](https://github.com/nekolaiv/combinote/issues).

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

### ✨ Inspiration

Combinote is built for students who want a **single, organized place** to manage their class notes. Start small with your study group — and scale it to an entire university. 🚀
