# Trakable App (Website)

> Track today. Transform tomorrow.

Trakable helps you build routines and gain meaningful insights into your life.

## What is Trakable?

Trakable offers two powerful ways to track your life:

### 1. Habits

Build lasting routines with weekly goals. Perfect for tracking recurring activities and building consistency:

- **Exercise:** Set and track workout goals like running 3 times a week
- **Reading:** Monitor daily reading habits
- **Meditation:** Track mindfulness practices
- **Health:** Monitor daily water intake and other health routines

### 2. Events

Log and track important occurrences in your life. Ideal for monitoring occasional events and spotting patterns over time:

- **Personal Milestones:** Track meaningful moments and achievements
- **Medical Tracking:** Monitor symptoms, allergies, and health conditions
- **Mental Health:** Track mood patterns and emotional well-being
- **Special Occasions:** Record and remember significant events

## Website Development Setup

1. **Clone the repository**

```bash
git clone [repository-url]
cd trakable
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Website Project Structure

```
trakable/
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── components/  # React components
│   │   └── page.tsx    # Main page component
│   └── styles/        # Global styles
├── public/           # Static assets
└── package.json     # Project dependencies and scripts
```

## Website Deployment

The website is optimized for deployment on Vercel. For deployment:

1. Push changes to the main branch
2. Vercel will automatically build and deploy the updates
