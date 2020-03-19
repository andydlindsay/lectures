import { renderHook } from '@testing-library/react-hooks';
import useMousePosition from '../useMousePosition';

test('should return an x key with an integer value', () => {
  const { result } = renderHook(() => useMousePosition());
  expect(result.current).toHaveProperty('x');
  expect(typeof result.current.x).toBe('number');
});

test('should return a y key with an integer value', () => {
  const { result } = renderHook(() => useMousePosition());
  expect(result.current).toHaveProperty('y');
  expect(typeof result.current.y).toBe('number');
});
