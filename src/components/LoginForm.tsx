
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Music } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    
    // Simulasi delay login
    setTimeout(() => {
      if (data.email && data.password) {
        onLogin(data.email, data.password);
        toast({
          title: "Login Berhasil",
          description: "Selamat datang di Sporty Lokal!"
        });
      } else {
        toast({
          title: "Login Gagal",
          description: "Email dan password harus diisi",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Music className="h-8 w-8 text-green-600 mr-2" />
            <CardTitle className="text-2xl font-bold text-green-600">Sporty Lokal</CardTitle>
          </div>
          <p className="text-gray-600">Masuk untuk menikmati musik tradisional Indonesia</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "Email harus diisi",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Format email tidak valid"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="masukkan@email.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                rules={{ 
                  required: "Password harus diisi",
                  minLength: {
                    value: 6,
                    message: "Password minimal 6 karakter"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="••••••••" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? "Masuk..." : "Masuk"}
              </Button>
            </form>
          </Form>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>Demo: Gunakan email dan password apa saja untuk masuk</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
