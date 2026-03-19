
-- Allow authenticated users to read leads
CREATE POLICY "Authenticated users can read leads" ON public.leads
  FOR SELECT TO authenticated
  USING (true);
