import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function ContactNotificationEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactNotificationProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Nouveau message MAKE Vannes — {subject}</Preview>
      <Body style={{ backgroundColor: "#fdfaf3", fontFamily: "Inter, system-ui, sans-serif" }}>
        <Container style={{ margin: "0 auto", padding: "40px 24px", maxWidth: 560 }}>
          <Heading style={{ fontSize: 24, color: "#1f1815", margin: "0 0 8px" }}>
            Nouveau message — MAKE Vannes
          </Heading>
          <Text style={{ color: "#7a6b5d", fontSize: 14, margin: "0 0 24px" }}>{subject}</Text>

          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: 24,
              borderRadius: 12,
              border: "1px solid #f3ead8",
            }}
          >
            <Text style={{ margin: "8px 0", color: "#1f1815" }}>
              <strong>Nom :</strong> {name}
            </Text>
            <Text style={{ margin: "8px 0", color: "#1f1815" }}>
              <strong>Email :</strong> {email}
            </Text>
            {phone ? (
              <Text style={{ margin: "8px 0", color: "#1f1815" }}>
                <strong>Téléphone :</strong> {phone}
              </Text>
            ) : null}
            <Text style={{ margin: "16px 0 8px", color: "#1f1815" }}>
              <strong>Message :</strong>
            </Text>
            <Text style={{ margin: "0", whiteSpace: "pre-wrap", color: "#1f1815", lineHeight: 1.6 }}>
              {message}
            </Text>
          </Section>

          <Text style={{ fontSize: 12, color: "#7a6b5d", marginTop: 24 }}>
            Vous pouvez répondre directement à ce mail — il sera envoyé à {email}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
