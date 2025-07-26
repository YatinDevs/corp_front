import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as api from "../services/apiService";

export const useStore = create(
  persist(
    (set, get) => ({
      // State
      products: [],
      singleProducts: [],
      comboProducts: [],
      featuredProducts: [],
      categories: [],
      featuredCategories: [],
      searchResults: [],
      loadingStates: {
        products: false,
        singleProducts: false,
        comboProducts: false,
        featuredProducts: false,
        categories: false,
        featuredCategories: false,
        search: false,
      },
      errors: {
        products: null,
        singleProducts: null,
        comboProducts: null,
        featuredProducts: null,
        categories: null,
        featuredCategories: null,
        search: null,
      },
      cartItems: [],
      isCartOpen: false,

      // Actions
      fetchProducts: async () => {
        set({
          loadingStates: { ...get().loadingStates, products: true },
          errors: { ...get().errors, products: null },
        });

        try {
          const data = await api.fetchProducts();
          set({
            products: data,
            loadingStates: { ...get().loadingStates, products: false },
          });
          return data;
        } catch (error) {
          set({
            errors: { ...get().errors, products: error.message },
            loadingStates: { ...get().loadingStates, products: false },
          });
          throw error;
        }
      },

      fetchFeaturedProducts: async () => {
        set({
          loadingStates: { ...get().loadingStates, featuredProducts: true },
          errors: { ...get().errors, featuredProducts: null },
        });

        try {
          const data = await api.fetchFeaturedProducts();
          set({
            featuredProducts: data,
            loadingStates: { ...get().loadingStates, featuredProducts: false },
          });
          return data;
        } catch (error) {
          set({
            errors: { ...get().errors, featuredProducts: error.message },
            loadingStates: { ...get().loadingStates, featuredProducts: false },
          });
          throw error;
        }
      },

      fetchSingleProducts: async () => {
        set({
          loadingStates: { ...get().loadingStates, singleProducts: true },
          errors: { ...get().errors, singleProducts: null },
        });

        try {
          const data = await api.fetchSingleProducts();
          set({
            singleProducts: data,
            loadingStates: { ...get().loadingStates, singleProducts: false },
          });
          return data;
        } catch (error) {
          set({
            errors: { ...get().errors, singleProducts: error.message },
            loadingStates: { ...get().loadingStates, singleProducts: false },
          });
          throw error;
        }
      },

      fetchComboProducts: async () => {
        set({
          loadingStates: { ...get().loadingStates, comboProducts: true },
          errors: { ...get().errors, comboProducts: null },
        });

        try {
          const data = await api.fetchComboProducts();
          set({
            comboProducts: data,
            loadingStates: { ...get().loadingStates, comboProducts: false },
          });
          return data;
        } catch (error) {
          set({
            errors: { ...get().errors, comboProducts: error.message },
            loadingStates: { ...get().loadingStates, comboProducts: false },
          });
          throw error;
        }
      },

      fetchProductById: async (id) => {
        try {
          return await api.fetchProductById(id);
        } catch (error) {
          throw error;
        }
      },

      fetchCategories: async () => {
        set({
          loadingStates: { ...get().loadingStates, categories: true },
          errors: { ...get().errors, categories: null },
        });

        try {
          const data = await api.fetchCategories();
          set({
            categories: data,
            loadingStates: { ...get().loadingStates, categories: false },
          });
          return data;
        } catch (error) {
          set({
            errors: { ...get().errors, categories: error.message },
            loadingStates: { ...get().loadingStates, categories: false },
          });
          throw error;
        }
      },

      fetchFeaturedCategories: async () => {
        set({
          loadingStates: { ...get().loadingStates, featuredCategories: true },
          errors: { ...get().errors, featuredCategories: null },
        });

        try {
          const data = await api.fetchFeaturedCategories();
          set({
            featuredCategories: data,
            loadingStates: {
              ...get().loadingStates,
              featuredCategories: false,
            },
          });
          return data;
        } catch (error) {
          set({
            errors: { ...get().errors, featuredCategories: error.message },
            loadingStates: {
              ...get().loadingStates,
              featuredCategories: false,
            },
          });
          throw error;
        }
      },

      fetchCategoryProducts: async (categoryId) => {
        try {
          return await api.fetchCategoryProducts(categoryId);
        } catch (error) {
          throw error;
        }
      },

      searchProducts: async (query) => {
        set({
          loadingStates: { ...get().loadingStates, search: true },
          errors: { ...get().errors, search: null },
        });

        try {
          const data = await api.searchProducts(query);
          set({
            searchResults: data,
            loadingStates: { ...get().loadingStates, search: false },
          });
          return data;
        } catch (error) {
          set({
            errors: { ...get().errors, search: error.message },
            loadingStates: { ...get().loadingStates, search: false },
          });
          throw error;
        }
      },

      // Cart actions
      addToCart: (product) => {
        const { cartItems } = get();
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
          // Update quantity if already in cart
          set({
            cartItems: cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          // Add new item to cart
          set({
            cartItems: [
              ...cartItems,
              {
                ...product,
                quantity: 1,
                addedAt: Date.now(),
              },
            ],
          });
        }
      },

      removeFromCart: (productId) => {
        set({
          cartItems: get().cartItems.filter((item) => item.id !== productId),
        });
      },

      updateQuantity: (productId, quantity) => {
        set({
          cartItems: get().cartItems.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => {
        set({ cartItems: [] });
      },

      // Cart visibility
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    }),
    {
      name: "ecommerce-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        cartItems: state.cartItems,
      }),
    }
  )
);

// Selectors
export const useCartTotal = () =>
  useStore((state) =>
    state.cartItems.reduce(
      (total, item) =>
        total + (item.discount_price || item.price) * item.quantity,
      0
    )
  );

export const useItemCount = () =>
  useStore((state) =>
    state.cartItems.reduce((count, item) => count + item.quantity, 0)
  );

export const useCartItem = (productId) =>
  useStore((state) => state.cartItems.find((item) => item.id === productId));

export const useIsProductInCart = (productId) =>
  useStore((state) => state.cartItems.some((item) => item.id === productId));

export const useProductById = (id) =>
  useStore((state) => {
    const allProducts = [
      ...state.products,
      ...state.singleProducts,
      ...state.comboProducts,
      ...state.featuredProducts,
    ];
    return allProducts.find((p) => p.id === id);
  });
