import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, RefreshCw, Users } from "lucide-react";
import type { User } from "@supabase/supabase-js";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  destination: string | null;
  ielts_status: string | null;
  message: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/admin/login");
      } else {
        setUser(session.user);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin/login");
      } else {
        setUser(session.user);
        fetchLeads();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setLeads(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-gold" />
          <h1 className="text-lg font-bold text-card-foreground">Lead Dashboard</h1>
          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
            {leads.length} total
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchLeads}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <span className="text-xs text-muted-foreground hidden sm:block">{user.email}</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      {/* Table */}
      <div className="p-6">
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Name</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Email</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Phone</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Destination</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">IELTS</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Message</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-muted-foreground">Loading...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-muted-foreground">No leads yet</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{lead.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{lead.email}</td>
                      <td className="px-4 py-3 text-muted-foreground">{lead.phone || "—"}</td>
                      <td className="px-4 py-3">
                        {lead.destination ? (
                          <span className="inline-block bg-accent/10 text-accent-foreground text-xs px-2 py-0.5 rounded-full font-medium" style={{ color: 'hsl(var(--gold))' }}>
                            {lead.destination}
                          </span>
                        ) : "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{lead.ielts_status || "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">{lead.message || "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString("en-IN", {
                          day: "numeric", month: "short", year: "numeric",
                        })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
