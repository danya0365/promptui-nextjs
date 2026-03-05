# Create Live Preview Pattern - PromptUI

## Overview

เอกสารนี้อธิบายถึงขั้นตอน (Flow) และไฟล์ที่ต้องเขียนหรือแก้ไข หากคุณต้องการ **เพิ่ม Showcase ใหม่** พร้อมกับระบบ **Live Preview** ในโปรเจค PromptUI

จากโครงสร้างของตัวระบบ การเพิ่ม Showcase Live Preview ใหม่ 1 รายการ จะประกอบด้วยการ:
✅ **สร้าง 1 ไฟล์** (React Component สำหรับหน้าจอ)
✅ **แก้ไข 3 ไฟล์** (เพื่อลงทะเบียนข้อมูลและผูก Component เข้ากับเส้นทาง/Model)

---

## สรุปไฟล์ที่เกี่ยวข้อง

| ประเภท | ตำแหน่งไฟล์ / โฟลเดอร์ | หน้าที่ |
|--------|---------|----------|
| **Create** | `src/presentation/components/demos/[Name]Demo[Model].tsx` | ไฟล์ Component จริงๆ ที่จะ Render แสดงตัว Showcase |
| **Modify** | `src/infrastructure/repositories/static/StaticShowcaseItemRepository.ts` | ฐานข้อมูล Mock (รายชื่อและข้อมูล Showcase) |
| **Modify** | `src/infrastructure/repositories/static/StaticShowcaseLivePreviewRepository.ts` | ผูก `showcaseId` เข้ากับ `aiModel` และระบุความสัมพันธ์ |
| **Modify** | `app/(live)/live/[id]/[agent]/page.tsx` | ไฟล์ที่ทำการดึง Component มารันให้ดูบน Live Preview |

---

## ขั้นตอนการเพิ่ม Showcase Live Preview ใหม่

### 1. ไฟล์ที่ต้องสร้างขึ้นมาใหม่ (Presentation Layer)
สร้าง UI Component ที่จะเป็นตัว Showcase จริงๆ ตาม Framework ของคุณ (ส่วนใหญ่อยู่ในโฟลเดอร์ `demos`)

**📍 ตำแหน่ง:** `src/presentation/components/demos/`  
**🔹 ตัวอย่างการสร้าง:** `MyNewCoolDemoGemini.tsx`

```tsx
// src/presentation/components/demos/MyNewCoolDemoGemini.tsx
import React from 'react';

export const MyNewCoolDemoGemini = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center items-center">
      <h1>My New Showcase!</h1>
    </div>
  );
};
```

---

### 2. ลงทะเบียนข้อมูล Showcase (Infrastructure Layer)
กำหนดรายละเอียดเนื้อหาของ Showcase นี้ เช่น รหัสประจำตัว (ID), ชื่อ, คำอธิบาย, รูปภาพ Thumbnail และหมวดหมู่ต่างๆ

**📍 ตำแหน่ง:** `src/infrastructure/repositories/static/StaticShowcaseItemRepository.ts`  
**🔹 สิ่งที่ต้องทำ:** นำ Object ใหม่ไปต่อท้ายใน Array ตัวแปร `SHOWCASE_ITEMS`

```typescript
// ล่างสุดของ Array SHOWCASE_ITEMS ก่อนปีกกาปิด ]
  {
    id: 'showcase-088', // <-- ID ต้องไม่ซ้ำกับตัวเดิม
    title: 'My New Cool Feature',
    description: 'คำอธิบายเจ๋งๆ ของฟีเจอร์นี้',
    category: 'dashboard',
    prompt: 'Create a cool dashboard with...',
    thumbnailUrl: '/thumbnails/new-cool.webp',
    tags: ['cool', 'dashboard', 'shiny'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-22T00:00:00.000Z',
    updatedAt: '2025-06-22T00:00:00.000Z',
  },
```

---

### 3. ผูกข้อมูล Showcase เข้ากับ AI Model (Infrastructure Layer)
ระบุให้ระบบรับรู้ว่า Showcase ID ที่เพิ่งสร้างนั้น ใช้โมเดล AI ตัวไหนในการ Prompt / ทำ Live Preview (เช่น Gemini 3.1 Pro หรือ Claude 4.6 Opus)

**📍 ตำแหน่ง:** `src/infrastructure/repositories/static/StaticShowcaseLivePreviewRepository.ts`  
**🔹 สิ่งที่ต้องทำ:** นำ Object ใหม่ไปต่อท้ายใน Array ตัวแปร `LIVE_PREVIEWS`

```typescript
// ล่างสุดของ Array LIVE_PREVIEWS ก่อนปีกกาปิด ]
  {
    id: 'lp-089', // <-- ID รันต่อเนื่อง
    showcaseId: 'showcase-088', // <-- ต้องตรงกับที่ตั้งไว้ในข้อ 2
    aiModel: 'gemini-3.1-pro', // หรือ 'claude-4.6-opus' ฯลฯ
    isActive: true,
    createdAt: '2025-06-22T00:00:00.000Z',
  },
```

---

### 4. นำ Component ไปแสดงผล (Routing/Presentation Layer)
นำ Component ที่คุณเพิ่งสร้างจากข้อ 1 มาจดทะเบียน (Register) ให้ระบบ Next.js Route (`/live/[id]/[agent]`) โหลด component ตัวนั้นไปแสดง

**📍 ตำแหน่ง:** `app/(live)/live/[id]/[agent]/page.tsx`  
**🔹 สิ่งที่ต้องทำ:** 
1. `import` Component ขึ้นมาบนสุดของไฟล์ 
2. หย่อนโครงสร้างลงไปในดิกชันนารี `LIVE_PREVIEW_COMPONENTS`

```tsx
// 1. Import Component เลื่อนไปข้างบนสุด
import { MyNewCoolDemoGemini } from '@/src/presentation/components/demos/MyNewCoolDemoGemini';

// 2. หาตัวแปร LIVE_PREVIEW_COMPONENTS แล้วเขียน key ใหม่ต่อท้ายลงไป
const LIVE_PREVIEW_COMPONENTS: Record<string, Partial<Record<AiModel, React.ComponentType>>> = {
  // ... ของเก่า ...
  'showcase-087': { 'claude-4.6-opus': iOS26LiquidGlassDemoGemini },
  
  // เพิ่มบรรทัดนี้ลงไป
  'showcase-088': { 'gemini-3.1-pro': MyNewCoolDemoGemini },
};
```

---

### 5. Component Pattern (Template)
เรามี **Pattern ข้อตกลงร่วมกัน** สำหรับการสร้าง Component คือ:

1. **`'use client';` เสมอ:** เพราะเราเน้นโชว์ UI สวยงามที่มี Interaction (เช่น กดปุ่มได้ มีแอนิเมชัน มี State)
2. **ไม่กวน Global CSS (`<style>` block ภายใน):** เพื่อให้ Live Preview ทำงานได้อิสระ ไม่ไปพังหน้าอื่น เรามักจะเขียน CSS ภายใน Component ไปเลยด้วย `<style>{...}</style>` แล้วครอบ UI ทั้งหมดด้วย `<div>` กล่องเดียวที่เป็น Container (Scoped Sandbox)
3. **การ Import แบบ Standalone:** พยายามใช้ Component พื้นฐาน ไม่พึ่งพา Context หรือ Layout แวดล้อมมากนัก

**📍 ตัวอย่างโครงสร้าง (Boilerplate):**

```tsx
'use client';

import React, { useState, useEffect } from 'react';

// 1. ตั้งชื่อนำหน้าด้วยสิ่งที่ทำ + Demo + ชื่อโมเดล
export const MyNewCoolDemoGemini: React.FC = () => {
  // --- States & Hooks ---
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Render ---
  return (
    // 2. ครอบกล่องนอกสุด ทำหน้าที่เปรียบเสมือน Body (ตั้งความสูง/พื้นหลัง เองให้ครบ)
    <div className="new-cool-demo-container">
      
      {/* 3. ยัด CSS เข้ามาในนี้เลย ไม่ต้องไปปนกับ Tailwind Global */}
      <style>{`
        /* นำเข้าฟอนต์เฉพาะถ้าต้องการ (เช่น Google Fonts) */
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

        .new-cool-demo-container {
          min-height: 100vh;
          width: 100%;
          background: #0f172a; /* สีกรมเข้มสไตล์ Dark Mode ยอดฮิต */
          color: #f8fafc;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden; /* กัน Scroll ทะลัก */
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00E5FF 0%, #9D00FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ใส่ CSS Animations / Components แตกย่อยไว้ล่างๆ ได้เลย */
      `}</style>
      
      {/* 4. เนื้อหา UI ของคุณ */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        {mounted ? (
          <h1 className="hero-title">Welcome to the Future</h1>
        ) : (
          <div>Loading...</div>
        )}
      </div>

    </div>
  );
};
```

---

## Diagram สรุปความสัมพันธ์ (Mental Model)

```
                            [1. Create UI]
               src/presentation/components/demos/MyDemo.tsx
                                      │
                                      ▼
                      [4. Register Route Render]
                 app/(live)/live/[id]/[agent]/page.tsx
                      (แมป Map ID + Model -> Component)
                                      ▲
                                      │ (ตรวจสอบความจับคู่)
                                      │
           ┌──────────────────────────┴──────────────────────────┐
           │                                                     │
[2. Data: Showcase Info]                          [3. Data: Model Config]
StaticShowcaseItemRepository               StaticShowcaseLivePreviewRepository
(ลงทะเบียน: ชื่อ, คำอธิบาย รูป)                  (ลงทะเบียน: showcaseId + โมเดลที่ใช้)
```

เพียงเท่านี้ คุณก็จะได้ Showcase Live Preview ของคุณแสดงผลได้อย่างสมบูรณ์ในการทำงานของระบบทั้งหมด!
