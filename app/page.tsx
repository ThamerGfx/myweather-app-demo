"user client";

import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Developed By ME using OpenAI, Next.js 13.5, Tailwind CSS, Tremor 3.9 +
          more and more...
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* City Picker Component */}
        </Card>
      </Card>
    </div>
  );
}
