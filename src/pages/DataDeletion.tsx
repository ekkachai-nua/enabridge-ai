import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DataDeletion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Data Deletion Instructions</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <p className="text-lg">
            If you would like to delete your data that has been collected through our application via Facebook Login, please follow the steps below:
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. In-App Request</h2>
            <ul className="space-y-2">
              <li>Log in to our application using your Facebook account.</li>
              <li>Go to Settings {">"}  Privacy {">"} Delete My Data.</li>
              <li>Confirm your request. Once submitted, we will permanently delete your associated data from our servers within 30 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Direct Request</h2>
            <p>If you are unable to access the application, you may request data deletion by contacting us directly:</p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> ekkachai.n@enabridge.ai</li>
              <li><strong>Subject:</strong> Facebook Data Deletion Request</li>
              <li>Please include your Facebook User ID (you can find this in your Facebook settings).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Automatic Deletion</h2>
            <p>If you uninstall the app and do not log in again, your Facebook-linked data will be automatically deleted within 90 days.</p>
          </section>

          <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
            <p className="text-foreground font-medium">
              ✅ <strong>Note:</strong> Once your data is deleted, it cannot be restored. Certain data required for legal, regulatory, or security purposes may be retained as permitted by law.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataDeletion;